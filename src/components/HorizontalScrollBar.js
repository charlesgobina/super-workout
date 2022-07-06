import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ScrollMenu, VisibilityContext } from
  'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
  >
    { data.map((item) => (
      <Box
        key={uuidv4()}
        m="0 40px"
      >
        <BodyPart
          key={uuidv4()}
          item={item}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    ))}
  </ScrollMenu>
);

HorizontalScrollBar.propTypes = {
  data: PropTypes.objectOf.isRequired,
  bodyPart: PropTypes.objectOf.isRequired,
  setBodyPart: PropTypes.func.isRequired,
};

export default HorizontalScrollBar;
