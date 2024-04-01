

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <div className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      {'{Colocar IMG}'}
    </div>
  );
};

export { Logo };
