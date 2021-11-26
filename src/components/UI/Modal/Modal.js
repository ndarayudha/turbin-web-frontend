import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ImgSaklar from "../../../assets/img_saklar.jpg";
import { modalAction } from "../../../store/slice/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const MyModalBackground = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 0;
  overflow-y: scroll;
`;

const MyCardContent = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 50vw;
  margin: auto;
  padding: 10px;
`;

const ModalHeader = styled.h2`
  font-size: 1.4rem;
  opacity: 0.7;
  padding: 5px 0;
`;

const ModalBody = styled.div``;

const ModalFooter = styled.div`
  padding: 10px 0;
  text-align: end;
`;

const MainParagraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const HeadingImage = styled.img`
  margin-top: 15px;
  max-width: 100%;
`;

const Modal = (props) => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.modal.modalContent);

  const handleCloseModal = () => {
    dispatch(modalAction.toogle());
  };

  
  const paragraphToArray = () => {
    if (content.content !== null) {
      let description = content.content;
      let removeDivider = description.split("|||");
      return removeDivider; 
    }
    return;
  }

  return (
    <MyModalBackground>
      <MyCardContent>
        {console.log(content)}
        <ModalHeader>Preview</ModalHeader>
        <hr />
        <ModalBody>
          <HeadingImage src={ImgSaklar} alt="gambar saklar" />
          {paragraphToArray().map((value, key) => (
            <MainParagraph key={key}>{value}</MainParagraph>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button primary onClick={handleCloseModal}>
            Tutup
          </Button>
        </ModalFooter>
      </MyCardContent>
    </MyModalBackground>
  );
};

export default Modal;
