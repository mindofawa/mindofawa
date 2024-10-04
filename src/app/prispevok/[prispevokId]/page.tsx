// src/app/prispevok/[id]/page.tsx


import Typography from '@mui/material/Typography';

export const metadata = {Title: "Prispevkov cislo: | ZoskaSnap"};

export default function PostDetail({
  params,
}: {
  params: {prispevokId: string};
}){




  return(

      <Typography>  Prispevok cislo: {params.prispevokId} </Typography>

  );
}