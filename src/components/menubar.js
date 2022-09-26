import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    p: 4,
};

const MenuBar = ({
    pictures
}) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    let slideImages = [];
    if (pictures.length > 0) {
        slideImages = pictures.map((picture) => {
            return {
                url: picture.picture,
                caption: picture.name
            }
        }).slice(0, 1);
    }
    return (
        <div className="menubar">
            <Button onClick={() => setOpen(true)}>SlideShow</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div className="" key={index}>
                                <Typography style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                                    <span>{slideImage.caption}</span>
                                </Typography>
                            </div>
                        ))}
                    </Slide>
                </Box>
            </Modal>
        </div>
    );
}

export default MenuBar;