import { useParams } from "react-router-dom";

const Contact = () => {
  const { id, name } = useParams();
  return (
    <div>
      Contact with {id}. {name}
    </div>
  );
};

export default Contact;
