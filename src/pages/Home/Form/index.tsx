import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Container } from './styles';

const Form = () => {
  return (
    <Container>
      <Input label="Name" name="name" placeholder="ex: Name 1" />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="ex: example@mail.com"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="ex: *******"
      />
      <Input label="Value" name="value" placeholder="ex: 150.00" />
      <Input label="Weight" name="weight" placeholder="ex: 99.99" />
      <Input label="Date" name="date" type="date" />
      <Input
        label="Available Foods"
        name="availableFoods"
        value=""
        onChange={() => {}}
        type="select"
      >
        <option value="" disabled>
          Select an option
        </option>
      </Input>
      <Input type="checkbox" label="Checkbox" name="checkbox" />

      <div className="buttons">
        <Button color="warning">Clear</Button>
        <Button type="submit">Submit</Button>
      </div>
    </Container>
  );
};

export default Form;
