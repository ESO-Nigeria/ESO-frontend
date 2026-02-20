import DOMPurify from 'dompurify';

export const useSanitize = () => {
    const sanitize = (html: string) => {
        if (process.server) {
            // In SSR, we might want to use a different approach or skip if the library is client-only.
            // However, DOMPurify can work on server with JSDOM if needed.
            // For now, let's return it as is or handle it if we have JSDOM.
            return html;
        }
        return DOMPurify.sanitize(html);
    };

    return {
        sanitize
    };
};
