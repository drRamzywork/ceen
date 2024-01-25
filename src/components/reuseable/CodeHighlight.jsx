import { Prism } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // =================================================

// =================================================
const CodeHighlight = ({
  children,
  language
}) => {
  return <Prism wrapLines wrapLongLines style={dracula} language={language} customStyle={{
    padding: '2rem',
    margin: 0,
    borderRadius: '0 0 .4rem .4rem'
  }}>
      {children}
    </Prism>;
};

export default CodeHighlight;