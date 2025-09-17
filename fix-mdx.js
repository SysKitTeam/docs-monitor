#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix remaining MDX parsing issues
function fixMDXIssues(content) {
  // Fix curly braces in text that might be interpreted as JSX
  // Only escape braces that are not in code blocks
  let lines = content.split('\n');
  let inCodeBlock = false;
  let inInlineCode = false;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Check if we're entering/leaving a code block
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    
    // Skip lines in code blocks
    if (inCodeBlock) {
      continue;
    }
    
    // Handle lines with curly braces that might cause issues
    if (line.includes('{') && line.includes('}') && !line.includes('`')) {
      // Escape specific patterns that are causing issues
      line = line.replace(/\{([^}]+)\}/g, (match, content) => {
        // Don't escape if it's already in backticks or looks like a file path
        if (content.includes('\\') || content.includes('/') || content.includes(':')) {
          return match;
        }
        // Don't escape if it's clearly meant to be a variable placeholder
        if (content.match(/^[A-Z][a-zA-Z\s]+$/)) {
          return `\\{${content}\\}`;
        }
        return match;
      });
    }
    
    lines[i] = line;
  }
  
  return lines.join('\n');
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
        const fixedContent = fixMDXIssues(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent);
          console.log(`Fixed MDX issues in: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Run the fix
console.log('Fixing remaining MDX parsing issues...');
processMarkdownFiles('./docs');
console.log('MDX fixes completed!');