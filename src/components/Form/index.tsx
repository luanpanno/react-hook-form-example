import Button from '../Button';
import Input from '../Input';

const Form = () => {
  return (
    <form>
      <Input label="Name" name="email" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
