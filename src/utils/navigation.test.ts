import test from 'node:test';
import assert from 'node:assert/strict';
import { toggleFAQ, validateWaitlistEmail, getActiveSection } from './navigation';

test('toggleFAQ opens a closed question', () => {
  assert.equal(toggleFAQ(null, 'faq-0'), 'faq-0');
  assert.equal(toggleFAQ('faq-1', 'faq-0'), 'faq-0');
});

test('toggleFAQ closes an already open question', () => {
  assert.equal(toggleFAQ('faq-0', 'faq-0'), null);
});

test('validateWaitlistEmail validates valid and invalid emails', () => {
  assert.deepEqual(validateWaitlistEmail(''), {
    isValid: false,
    error: 'Email address is required.',
  });
  assert.deepEqual(validateWaitlistEmail('not-an-email'), {
    isValid: false,
    error: 'Please enter a valid email address.',
  });
  assert.deepEqual(validateWaitlistEmail('gokulan.rkivln@gmail.com'), {
    isValid: true,
  });
});

test('getActiveSection correctly identifies active portfolio section by scrollY', () => {
  const sections = [
    { id: 'hero', top: 0, height: 800 },
    { id: 'stack', top: 800, height: 1000 },
    { id: 'philosophy', top: 1800, height: 900 },
    { id: 'projects', top: 2700, height: 1200 },
    { id: 'education', top: 3900, height: 1200 },
  ];

  assert.equal(getActiveSection(0, sections), 'hero');
  assert.equal(getActiveSection(750, sections), 'stack');
  assert.equal(getActiveSection(2800, sections), 'projects');
});
