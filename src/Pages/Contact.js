import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <form className=" pt-32 position-relative -z-10">
      <div className="px-10">
        <MDBRow className="mb-4 w-[600px]">
          <MDBCol>
            <MDBInput id="form6Example1" label="First name" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form6Example2" label="Last name" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          wrapperClass="mb-4 w-[575px] "
          id="form6Example3"
          label="Company name"
        />
        <MDBInput
          wrapperClass="mb-4 w-[575px] "
          id="form6Example4"
          label="Address"
        />
        <MDBInput
          wrapperClass="mb-4 w-[575px]"
          type="email"
          id="form6Example5"
          label="Email"
        />
        <MDBInput
          wrapperClass="mb-4 w-[575px]"
          type="tel"
          id="form6Example6"
          label="Phone"
        />
        <MDBInput
          wrapperClass="mb-4 w-[575px]"
          textarea
          id="form6Example7"
          rows={4}
          label="Additional information"
        />
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4 w-[575px]"
          id="form6Example8"
          label="Create an account?"
          defaultChecked
        />
        <MDBBtn className="mb-4">Send</MDBBtn>
      </div>
      <div>
        <iframe
          className="w-[100%] h-[300px] mt-5 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.220465004627!2d72.84907247411392!3d19.05404205266369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94791a5bd7d%3A0xe7d79ab380319668!2sApple%20BKC!5e0!3m2!1sen!2sin!4v1683179961202!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </form>
  );
}
