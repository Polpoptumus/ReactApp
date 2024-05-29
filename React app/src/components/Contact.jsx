import { Typography } from "@material-ui/core";

function Contact() {
  return (
    <div className="contact-section ">
      <Typography variant="h3" component="h3">
        Contacts
      </Typography>
      <Typography variant="p" component="p">
        Email: highlandbeans@beans.com
      </Typography>
      <Typography variant="p" component="p">
        Telephone: 07707777777
      </Typography>
      <Typography variant="p" component="p">
        Address: 411 High St, Inverness, IV66 23V, UK
      </Typography>
    </div>
  );
}
export default Contact;
