import Image from 'react-bootstrap/Image';
import Headlines from './Headlines';
import Bios from './Bios';

function WriterMainBody() {
  return (
    <>
      <Headlines />
      <Image className="mt-4" src="/react-static/img/portrait_writer.webp" alt="Erik J Ransom Portrait - Writing at Home" fluid rounded />
      <Bios />
      <p className="mt-4">
        To keep up with more of Erik&rsquo;s latest exploits, follow him on
        social media and visit&nbsp;
        <a
          href="http://www.iconoclasttheatrecollective.com"
          target="_blank"
          rel="noreferrer"
        >
          iconoclasttheatrecollective.com
        </a>
        .
      </p>
    </>
  );
}

export default WriterMainBody;