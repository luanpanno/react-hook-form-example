import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Container } from './styles';

const Form = () => {
  return (
    <Container>
      <Input label="Name" name="email" />

      <div className="buttons">
        <Button color="warning">Clear</Button>
        <Button type="submit">Submit</Button>
      </div>
    </Container>
  );
};

export default Form;
