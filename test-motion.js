'use strict';

// Simple test to verify framer-motion imports
try {
  const framerMotion = require('framer-motion');
  console.log('Framer Motion loaded successfully!');
  console.log('Available exports:', Object.keys(framerMotion));
  if (framerMotion.motion) {
    console.log('motion object is available');
  } else {
    console.log('ERROR: motion object is missing!');
  }
} catch (error) {
  console.error('Error loading framer-motion:', error);
}
