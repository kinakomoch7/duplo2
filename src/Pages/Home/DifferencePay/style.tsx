import { css } from "@emotion/react";
import { BoxProps, SxProps } from "@mui/material";
import { BLACK, WHITE } from "../../../common/style";

export const divStyles = {
  container:css({
    height:'100%',
    justifyContent:'space-evenly',
    display:"flex",
    flexDirection: 'column'
  }),
  userDisplay:css({
    display:"flex",
    flexDirection:'row',
    justifyContent:"space-evenly",
    width:'70vw',
    margin:'0 auto'
  }),
}

export const muiStyles:{
  box: BoxProps;
  icon: SxProps;
} = {
  box:{
    width:'80%',
    height:'30vh',
    margin:'auto',
    border: `solid 2px ${BLACK}`,
    borderRadius:10,
    bgcolor: WHITE
  },
  icon:{
    width: 70,
    height: 70,
    color:BLACK
  }
}