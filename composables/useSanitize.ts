import DOMPurify from 'dompurify';

export const useSanitize = () => {
    /**
   * Cleans a string of HTML using DOMPurify to prevent XSS.
   * @param {string} unsanitizedHtml - The raw HTML string.
   * @returns {string} - The safe HTML string.
   */
    const getSafeHtml = (unsanitizedHtml: string): string => {
        if (process.server) {
            return unsanitizedHtml;
        }
        return DOMPurify.sanitize(unsanitizedHtml);
    };

    return {
        getSafeHtml
    };
};
