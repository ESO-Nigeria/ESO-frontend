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

export function convertToAMPM(timeString: { split: (arg0: string) => { (): any; new(): any; map: { (arg0: NumberConstructor): [any, any]; new(): any } } }) {
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

export function transformHref(href: string) {
  // Replace spaces and periods with hyphens
  return href.replace(/[\s.]+/g, '-');
}
export function transformHrefTitle(href: string) {
  // Replace spaces and periods with hyphens
  return href.replace(/[\s.]+/g, ' ');
}
export function reverseTransform(href: string) {
  // Replace hyphens back to spaces and periods
  // Assuming periods are not part of the original string, we can replace hyphens to spaces
  return href.replace(/-/g, ' '); // Replace hyphens with spaces
}

export function checkLink(link: string) {
  // Check if the link starts with https
  if (link.startsWith("https")) {
    // If it does, return the link as it is
    return link;
  } else {
    // If it doesn't, append https to the beginning of the link
    return "https://" + link;
  }
}

export function getDuration(startDate: string | number , endDate: string | number ) {
  // Ensure the input dates are valid
  const start = new Date(startDate);
  const end = new Date(endDate);
    // if (isNaN(start) || isNaN(end)) {
  //     throw new Error('Invalid date input');
  // }

  // Calculate the difference in milliseconds
  const diffInMs = end - start;

  // Calculate the total days
  const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  // Determine the appropriate duration format
  if (totalDays > 30) {
      // More than 30 days, return in months
      const months = Math.floor(totalDays / 30);
      return `${months} month${months > 1 ? 's' : ''}`;
  } else if (totalDays > 7) {
      // More than 7 days, return in weeks
      const weeks = Math.floor(totalDays / 7);
      return `${weeks} week${weeks > 1 ? 's' : ''}`;
  } else {
      // Return in days if it's 7 days or less
      return `${totalDays} day${totalDays > 1 ? 's' : ''}`;
  }
}