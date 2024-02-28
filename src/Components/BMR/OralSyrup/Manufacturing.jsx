import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OralSyruppage6 from './OralSyruppage6';
export default function Manufacturing() {
  return (
    <div>
        <h2>3.1 Preparation</h2>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>3.1.1 Equipments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>3.1.2 Line Clearance Check</Typography>
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
          <Typography>3.1.3 Preparation Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <OralSyruppage6/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    <div>
        <h2>3.2 QA Approval</h2>
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
      </div>
      <div>
        <h2>3.3 CIP</h2>
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
      <div>
        <h2>3.4 CIP Solution QA Approval</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>3.4 CIP Solution QA Approval</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <OralSyruppage6/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}