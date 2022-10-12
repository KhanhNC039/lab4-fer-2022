import React from "react";
import { useContext } from "react";
import { Button, Container, Select, Textarea, TextInput ,Icon} from "react-materialize";
import { ThemeContext } from "./ThemeContext";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const handleSubmit = (e) => {e.preventDefault();};
  return (
    <Container>
      <h3 style={{font:"inherit"}}>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <TextInput id="TextInput-38" label="Your Name" />
        <TextInput id="TextInput-39" label="Your Phone" />
        <TextInput email id="TextInput-41" label="Email" validate />
        <Select
          id="Select-46"
          multiple={false}
          onChange={function noRefCheck() {}}
          value=""
        >
          <option disabled value="">
            Choose your favourte nation
          </option>
          <option value="1">England</option>
          <option value="2">France</option>
          <option value="3">Spain</option>
        </Select>
        <Textarea
          icon={<Icon>mode_edit</Icon>}
          id="Textarea-28"
          label="Your content"
        />
        <Button>Submit</Button>
      </form>
    </Container>
    // <div className='contact-body' style={{
    //     backgroundColor: theme.backgroundColor,
    //     color: theme.color
    //   }}>
    // <div className="contact">
    //     <h2 className="contact-heading">
    //         Contact information
    //     </h2>
    //     <div className="contact-container">
    //         <a href="tel:0948766900" className="contact-item">
    //             <div className="contact-icon">
    //                 <img src="assets\images\phone.jpg"  />
    //             </div>
    //             <div className="contact-info">0948766900</div>
    //         </a>

    //         <a href="mailto:someone@example.com" className="contact-item">
    //             <div className="contact-icon">
    //                 <img src="assets\images\2751.jpg" alt="" />
    //             </div>
    //             <div className="contact-info">khanhncse161540@fpt.edu.vn</div>
    //         </a>

    //         <a
    //             href="https://www.facebook.com/CongKhanh1712"
    //             target="_blank"
    //             className="contact-item"
    //         >
    //             <div className="contact-icon">
    //                 <img src="assets\images\Facebook_f_logo_(2019).svg.webp" alt="" />
    //             </div>
    //             <div className="contact-info">FaceBookInfo</div>
    //         </a>
    //     </div>
    // </div>
    // </div>
    //     <body className='contact-body' style={{
    //         backgroundColor: theme.backgroundColor,
    //         color: theme.color
    //       }}>
    //          <div className="Contact-head">
    //                 <p>Contact Information</p>

    //         <div class="contact-info">

    //             <div class="contact-card">
    //                 <img src='assets\images\phone11.svg.webp' alt='' />
    //                 <p >+84 948766900</p>
    //             </div>

    //             <div class="contact-card">
    //                 <img src='assets\images\2751.jpg' alt='' />
    //                 <p>khanhncse161540@fpt.edu.vn</p>
    //             </div>

    //             <div class="contact-card">

    //                 <img src='assets\images\Facebook_f_logo_(2019).svg.webp' alt='' />
    //                 <p><a href='https://www.facebook.com/CongKhanh1712'>FaceBookInfo</a></p>
    //             </div>
    //         </div>
    //         </div>
    //   </body>
  );
}
