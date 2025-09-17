#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to convert GitBook syntax to Docusaurus admonitions
function convertGitBookToDocusaurus(content) {
  // Convert {% hint style="warning" %} blocks
  content = content.replace(
    /{% hint style="warning" %}([\s\S]*?){% endhint %}/g,
    (match, innerContent) => {
      return `:::warning\n${innerContent.trim()}\n:::\n`;
    }
  );

  // Convert {% hint style="info" %} blocks
  content = content.replace(
    /{% hint style="info" %}([\s\S]*?){% endhint %}/g,
    (match, innerContent) => {
      return `:::info\n${innerContent.trim()}\n:::\n`;
    }
  );

  // Convert {% hint style="success" %} blocks
  content = content.replace(
    /{% hint style="success" %}([\s\S]*?){% endhint %}/g,
    (match, innerContent) => {
      return `:::tip\n${innerContent.trim()}\n:::\n`;
    }
  );

  // Convert {% hint style="danger" %} blocks
  content = content.replace(
    /{% hint style="danger" %}([\s\S]*?){% endhint %}/g,
    (match, innerContent) => {
      return `:::danger\n${innerContent.trim()}\n:::\n`;
    }
  );

  // Convert generic {% hint %} blocks to note
  content = content.replace(
    /{% hint %}([\s\S]*?){% endhint %}/g,
    (match, innerContent) => {
      return `:::note\n${innerContent.trim()}\n:::\n`;
    }
  );

  // Convert {% code %} blocks (if any)
  content = content.replace(
    /{% code title="([^"]*)" %}([\s\S]*?){% endcode %}/g,
    (match, title, codeContent) => {
      return `\`\`\`\n${codeContent.trim()}\n\`\`\`\n`;
    }
  );

  // Convert simple {% code %} blocks
  content = content.replace(
    /{% code %}([\s\S]*?){% endcode %}/g,
    (match, codeContent) => {
      return `\`\`\`\n${codeContent.trim()}\n\`\`\`\n`;
    }
  );

  return content;
}

// Function to process all markdown files recursively
function processMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processMarkdownFiles(filePath);
    } else if (path.extname(file) === '.md') {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const convertedContent = convertGitBookToDocusaurus(content);
        
        if (content !== convertedContent) {
          fs.writeFileSync(filePath, convertedContent);
          console.log(`Converted: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Run the conversion
console.log('Converting GitBook syntax to Docusaurus admonitions...');
processMarkdownFiles('./docs');
console.log('Conversion completed!');