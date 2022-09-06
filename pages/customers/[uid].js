import { useRouter } from "next/router";
import React from "react";
import ReactDOM from "react-dom";

export default function Customer() {
  const router = useRouter();
  const query = router.query;

  const uid = query.uid;
  const src = 'https://player.vimeo.com/video/740068312?h=6670e043f6&interactive_params=[supportpin='+ uid +']';
  // const src = 'https://player.vimeo.com/video/737593061?h=657511d7a7&interactive_params=[uniqueid='+ uid +']';

  return (
    <div style={{ padding: 40 }}>
      <iframe
        src={src}
        width="1280"
        height="720"
      ></iframe>
    </div>   
  );
}

