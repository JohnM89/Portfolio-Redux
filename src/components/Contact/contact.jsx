import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GroupBox, Button, ScrollView, TextInput, Frame, Toolbar, Window, WindowContent, WindowHeader } from 'react95';
import styled from 'styled-components';
import AnimatedLetters from '../AnimatedLetters/animatedletters';

const Wrapper = styled.div`
  padding: 5rem;
  // background: ${({ theme }) => theme.desktopBackground};

  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }

    &:before {
    height: 100%;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
    }

    &:after {
      height: 3px;
     width: 100%;
     left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  #cutout {
    padding: 1rem;
    width: 400px;
    background: ${({ theme }) => theme.canvas};
  }
`;

const Contact = () => {
//   const [state, setState] = useState({
//     value: ''
//  });

//  const handleChange  = (e) =>
//     setState({ value: e.target.value });
//   const reset = () => setState({ value: '' });

    // const handleSubmit = (event) => {
    //     event.preventDefault(); // Prevent the default form submission behavior
    //     // Your submit logic here
    //     console.log('Form submitted!');
    // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9alko6t', 'template_obvxi9f', form.current, 'M25D7aTY81tiWY-_J')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper>
      <Window className="contact-page">
        <WindowHeader className="window-title">
          <span>ContactForm.exe</span>
          <Button>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        <WindowContent>
          
          <GroupBox label="Contact Me">
            {/* <h1>
              <AnimatedLetters
                letterClass="text-animate-hover"
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1> */}
            <p>I am on the lookout for freelance opportunities - big or small. Contact me using the form below if you have any questions!</p>
            <form ref={form} onSubmit={sendEmail}>
              <p><TextInput 
              // value={state.value}
              placeholder="Name"
              // onChange={handleChange}
               type="text" name="name" required /></p>
              <p><TextInput placeholder="Email" type="email" name="email" required /></p>
              <p><TextInput placeholder="Subject" type="text" name="subject" required /></p>
              <p><TextInput multiline rows={4} placeholder="Message" name="message" required /></p>
              
             <Button type="submit" style={{ margin: '10px 0', width: '100%' }}>
    Send
  </Button>
            </form>
          </GroupBox>
          <div className="info">
            John MacNeil, Web Developer
          </div>
        </WindowContent>
      </Window>
    </Wrapper>
  );
}

export default Contact;
