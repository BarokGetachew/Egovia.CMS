// Simple structure validation script
// Run with: node test-structure.js

const fs = require('fs');
const path = require('path');

console.log('🔍 Testing Egovia CMS Structure...\n');

const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'next.config.js',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.scss',
  'src/app/overview/page.tsx',
  'src/app/detail/[slug]/page.tsx',
  'src/app/login/page.tsx',
  'src/components/MainLayout.tsx',
  'src/components/HeroSection.tsx',
  'src/components/ServiceCards.tsx',
  'src/components/ContentBlocks.tsx',
  'src/lib/mockData.ts',
  'README.md'
];

let allGood = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ Missing: ${file}`);
    allGood = false;
  }
});

// Check package.json dependencies
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('\n📦 Dependencies Check:');
  
  const requiredDeps = [
    '@carbon/react',
    '@carbon/icons-react', 
    '@carbon/styles',
    'next',
    'react',
    'react-dom',
    'sass'
  ];
  
  requiredDeps.forEach(dep => {
    if (pkg.dependencies[dep]) {
      console.log(`✅ ${dep}: ${pkg.dependencies[dep]}`);
    } else {
      console.log(`❌ Missing dependency: ${dep}`);
      allGood = false;
    }
  });
  
} catch (err) {
  console.log('❌ Could not read package.json');
  allGood = false;
}

console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('🎉 Structure validation PASSED!');
  console.log('Ready to install Node.js and run: npm install && npm run dev');
} else {
  console.log('⚠️  Some issues found - check the list above');
}
console.log('='.repeat(50));
