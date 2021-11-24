import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ImgSaklar from "../../../assets/img_saklar.jpg";
import { modalAction } from "../../../store/slice/modal-slice";
import { useDispatch } from "react-redux";

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

const arrayOfParagraph = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga nihil, voluptatem labore, ad quas, molestiae explicabo mollitia laudantium vitae quam nesciunt libero exercitationem odit repellendus incidunt expedita inventore placeat reiciendis quasi non maxime similique eveniet ratione. Culpa nihil unde aut voluptate, provident quidem vel expedita repudiandae fugit officiis nobis.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime, eveniet libero nulla at architecto vel. Itaque non similique sed accusamus saepe nulla, soluta libero commodi repellat, suscipit distinctio excepturi, nihil repudiandae autem numquam maxime enim dolores veniam eveniet recusandae dolore. Placeat, suscipit repellat. Officia reiciendis eius libero neque quidem asperiores, facilis eum quos voluptate aspernatur doloremque non corrupti iusto molestiae voluptas, blanditiis magni eos similique explicabo labore maxime vero temporibus pariatur est. Placeat, hic, sapiente reiciendis obcaecati veniam eligendi, alias harum pariatur consequuntur maiores voluptates repellendus consectetur quas quae dolorem quaerat. Animi obcaecati ex tenetur et autem non nulla.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae sequi rerum, doloremque ratione optio vero labore ex. Reprehenderit, impedit ducimus! Iste optio sunt, excepturi tempora voluptates voluptatem est sapiente.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eveniet omnis nihil laborum non saepe magnam nemo minima, id et voluptatibus totam commodi fuga earum labore. In vero laudantium tempore harum corporis officia, pariatur ratione sit numquam asperiores magni nesciunt illo distinctio minus optio. Maxime reiciendis minus voluptatem corporis animi.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt cumque tempore quisquam? Officiis at ratione perspiciatis adipisci eum aliquam excepturi deleniti cumque voluptates! Quia repellat non, quasi architecto tempora ea molestias illum? Incidunt temporibus, veniam nihil dolorum corporis reiciendis obcaecati dolore autem? Amet eaque atque adipisci, dolores asperiores beatae dolore ab. Laboriosam odit expedita alias dolore dolor doloremque dicta illo adipisci ullam eligendi perspiciatis libero, nemo id autem eaque quod. Rerum excepturi aut vitae recusandae dolores hic nobis harum?",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum qui officia ad veniam nulla optio fuga libero at provident? Tempore aut illum animi. Fugiat architecto unde iusto maxime velit maiores molestiae obcaecati, laborum nobis ex ut aliquam voluptatem numquam alias autem minus tempore? Nam saepe vitae possimus blanditiis quasi iure, animi earum perferendis iste rem. Velit maxime cum rem eveniet vitae pariatur in mollitia ea maiores alias, rerum modi facere autem ipsum.",
];

const Modal = (props) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(modalAction.toogle());
  };

  return (
    <MyModalBackground>
      <MyCardContent>
        <ModalHeader>Preview</ModalHeader>
        <hr />
        <ModalBody>
          <HeadingImage src={ImgSaklar} alt="gambar saklar" />
          {arrayOfParagraph.map((value, key) => (
            <MainParagraph>{value}</MainParagraph>
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
