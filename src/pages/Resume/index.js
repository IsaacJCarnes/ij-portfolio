import Pdf from '../../assets/resumeCarnes.pdf';

export default function Resume(){
    
    return (
        <object className='d-flex justiy-content-center flex-column' style={{height: '65vh'}}data={Pdf} type="application/pdf" width="100%" height="100%">
            <p className='ResumeText text-center'>External link to <a href={Pdf}>to the PDF</a></p>
        </object>
    )
}