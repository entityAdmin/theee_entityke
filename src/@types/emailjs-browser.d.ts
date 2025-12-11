declare module "@emailjs/browser" {
  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  export function init(userId: string): void;

  export function sendForm(
    serviceId: string,
    templateId: string,
    form: HTMLFormElement,
    publicKey?: string
  ): Promise<EmailJSResponseStatus>;

  const emailjs: {
    init: typeof init;
    sendForm: typeof sendForm;
  };

  export default emailjs;
}
