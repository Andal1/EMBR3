import React,{useState}  from 'react'

import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import './OralSyrup.css'




const OralSyruppage1 = ({orderId}) => {
  const [isEditable, setIsEditable] = useState(false);
    const [productname,setProductname]= useState('')
    const [documentname,setDocumentname] = useState('')
    const [versionnumber,setVersionnumber] = useState('')
    const [changecontrolnumber,setChangecontrolnumber] = useState('')
    const [supersedesname,setSupersedesname] = useState('')
    const  [effectivedate,setEffectivedate]= useState('')
    const [labelclaim,setLabelclaim] = useState('')
    const [parentcode,setParentcode] = useState('')
    const [batchnumber,setBatchnumber] = useState('')
    const [batchsize,setBatchsize] = useState('')
    const [shelflife,setShelflife] = useState('')
    const [mgfdate,setMgfdate] = useState('')
    const [expdate,setExpdate] = useState('')
    const handleSubmit = (e) =>{
      e.preventDefault();
    }
    return (
      <div className='OralSyruppage1'>
          <h2>Product Details</h2>
      <form>
            <label htmlFor="productname">Product Name : </label>
            <input type="text" value={productname} onChange={(e) => setProductname(e.target.value)}id="productname" name="productname"/><br/>
            <label htmlFor="documentname">Document Number : </label>
            <input type="text" value={documentname}  onChange={(e) => setDocumentname(e.target.value)}id="documentname" name="documentname"/><br/>
            <label htmlFor="versionnumber">Version Number : </label>
            <input type="text" value={versionnumber} onChange={(e) => setVersionnumber(e.target.value)}id="versionnumber" name="versionnumber"/><br/>
            <label htmlFor="changecontrolnumber">Change Control Number : </label>
            <input type="text" value={changecontrolnumber} onChange={(e) => setChangecontrolnumber(e.target.value)}id="changecontrolnumber" name="changecontrolnumber"/><br/>
            <label htmlFor="supersedesname">Supersedes : </label>
            <input type="text" value={supersedesname} onChange={(e) => setSupersedesname(e.target.value)}id="supersedesname" name="supersedesname"/><br/>
            <label htmlFor="effectivedate">Effective Date : </label>
            <input type="date" value={effectivedate} onChange={(e) => setEffectivedate(e.target.value)}id="effectivedate" name="effectivedate"/><br/>
            <label htmlFor="labelclaim">Label Claim : </label>
            <input type="text" value={labelclaim} onChange={(e) => setLabelclaim(e.target.value)}id="labelclaim" name="labelclaim"/><br/>
            <label htmlFor="parentcode">Parent Code : </label>
            <input type="text" value={parentcode} onChange={(e) => setParentcode(e.target.value)}id="parentcode" name="parentcode"/><br/>
            <label htmlFor="batchnumber">Batch Number : </label>
            <input type="text" value={batchnumber} onChange={(e) => setBatchnumber(e.target.value)}id="batchnumber" name="batchnumber"/><br/>
            <label htmlFor="batchsize">Batch Size : </label>
            <input type="text" value={batchsize} onChange={(e) => setBatchsize(e.target.value)}id="batchsize" name="batchsize"/><br/>
            <label htmlFor="shelflife">Shelf Life : </label>
            <input type="text" value={shelflife} onChange={(e) => setShelflife(e.target.value)}id="shelflife" name="shelflife"/><br/>
            <label htmlFor="mgfdate">Mgf Date : </label>
            <input type="date" value={mgfdate} onChange={(e) => setMgfdate(e.target.value)}id="mgfdate" name="mgfdate"/><br/>
            <label htmlFor="expdate">Exp Date : </label>
            <input type="date" value={expdate} onChange={(e) => setExpdate(e.target.value)}id="expdate" name="expdate"/><br/>
          </form>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right'}}>
          <Button variant="contained" onClick={()=>{setIsEditable(true)}}>&nbsp;&nbsp; Edit &nbsp;&nbsp;</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained">Update</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained">&nbsp;&nbsp; Print &nbsp;&nbsp;</Button>
        </div>
          </div>
          
    )
}

export default OralSyruppage1