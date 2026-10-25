/**
 * Pure utility functions for navigation, FAQ state, and waitlist validation.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export function toggleFAQ(openId: string | null, clickedId: string): string | null {
  return openId === clickedId ? null : clickedId;
}

export function validateWaitlistEmail(email: string): { isValid: boolean; error?: string } {
  const trimmed = email.trim();
  if (!trimmed) {
    return { isValid: false, error: 'Email address is required.' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }
  return { isValid: true };
}

export interface SectionOffset {
  id: string;
  top: number;
  height: number;
}

export function getActiveSection(scrollY: number, sections: SectionOffset[]): string {
  if (sections.length === 0) return '';
  for (let i = sections.length - 1; i >= 0; i--) {
    const sec = sections[i];
    if (scrollY >= sec.top - 120) {
      return sec.id;
    }
  }
  return sections[0].id;
}
