import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-col md:flex-row">
        <div className="m-1 md:w-full">
          <Input placeholder="First Name" />
        </div>
        <div className="m-1 md:w-full">
          <Input placeholder="Last Name" />
        </div>
      </div>
      <div className="flex md:p-1">
        <Input className="m-1" placeholder="Email" />
        <Input className="opacity-0 hidden md:block" />
      </div>
      <div className="flex">
        <Input className="m-1" placeholder="Subject" />
      </div>
      <div className="flex">
        <Textarea className="m-1 h-[200px]" placeholder="Message" />
      </div>
      <div className="m-2 md:mx-auto my-2">
        <Button className="text-lg text-secondary-foreground bg-secondary">
          Submit
        </Button>
      </div>
    </div>
  );
}

const Contact = () => {
  return (
    <div className="p-2 pt-5 bg-muted rounded-lg m-10 md:m-auto md:w-[825px]">
      <div className="ml-5">
        <h1 className="text-3xl md:text-4xl font-bold">
          Contact Me
        </h1>
        <p className="my-2 text-md md:text-lg italic text-muted-foreground">
          Don't like forms? Send me an{" "}
          <a
            className="text-secondary underline cursor-pointer font-bold not-italic"
            href="mailto:gramopadhye37@gmail.com"
          >
            email
          </a>
          .
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
