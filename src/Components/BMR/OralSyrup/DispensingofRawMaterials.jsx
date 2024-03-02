import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OralSyruppage6 from './OralSyruppage6';
import Equipment21 from './Equipment21';
export default function DispensingofRawMaterials({orderId}) {
  return (
    <div>
      <h2>Dispensing Of Raw Materials</h2>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>2.1 Equipments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Equipment21 orderId={orderId}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>2.2 Line Clearance Check</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <OralSyruppage6/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>2.3 Dispensing Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <OralSyruppage6/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>2.4 Active Pharmaceutical Ingredient History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <OralSyruppage6/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>2.5 Material Dispensing Sheet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <OralSyruppage6/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}