import { generateTooltipId } from '../../shared/utils/generateTooltipId';
import Tooltip from '../Tooltip';
import { ButtonOutline, ButtonSolid } from './styles';

type Colors = 'primary' | 'secondary' | 'warning' | 'light';

interface Props {
  color?: Colors;
  outline?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  title?: string;
  tooltipId?: string | number;
  noTooltip?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  color = 'primary',
  outline = false,
  type = 'button',
  disabled = false,
  title,
  onClick,
  tooltipId,
  noTooltip = false,
  children,
}) => {
  function handleTooltipId() {
    if (!title) {
      return '';
    }

    if (!tooltipId) {
      return title;
    }

    return generateTooltipId(tooltipId, title);
  }

  if (outline) {
    return (
      <ButtonOutline
        data-tip={title ?? ''}
        data-for={handleTooltipId()}
        color={color}
        outline={outline}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
        {!noTooltip && <Tooltip id={handleTooltipId()} />}
      </ButtonOutline>
    );
  }

  return (
    <ButtonSolid
      data-tip={title ?? ''}
      data-for={handleTooltipId()}
      color={color}
      outline={outline}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {!noTooltip && <Tooltip id={handleTooltipId()} />}
    </ButtonSolid>
  );
};

export default Button;
