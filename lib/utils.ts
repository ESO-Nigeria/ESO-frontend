import { type ClassValue, clsx } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return dayjs(date).format('YYYY-MM-DD')
}

export const formatToNaira = (amount: any) => {
  // Convert the amount to a string
  const amountStr = amount?.toString();

  // Add commas as thousand separators
  const formattedAmount = amountStr?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Add the Naira symbol (₦) at the beginning
  const nairaFormattedAmount = "₦" + formattedAmount;

  return nairaFormattedAmount;
}

export function convertToAMPM(timeString) {
  // Split the time string into hours and minutes
  const [hours, minutes] = timeString.split(':').map(Number);

  // Validate the input time
  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      throw new Error('Invalid time format. Please use "HH:MM" in 24-hour format.');
  }

  // Determine AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const convertedHours = hours % 12 || 12; // Convert 0 to 12 for midnight

  // Format the time string
  return `${convertedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function transformHref(href) {
  // Replace spaces and periods with hyphens
  return href.replace(/[\s.]+/g, '-');
}

export function reverseTransform(href) {
  // Replace hyphens back to spaces and periods
  // Assuming periods are not part of the original string, we can replace hyphens to spaces
  return href.replace(/-/g, ' '); // Replace hyphens with spaces
}