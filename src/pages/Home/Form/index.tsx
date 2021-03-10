import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Container } from './styles';

const Form = () => {
  return (
    <Container>
      <Input label="Name" name="email" />
      <Button type="submit">Submit</Button>
    </Container>
  );
};

export default Form;
