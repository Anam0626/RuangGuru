import { Box } from "@chakra-ui/react"
const Footer = () => {
    return (
        <>
            <Box className="footer" 
            width="100%"
            bg="gray.700"
            color="white"
            textAlign="center"
            py={3}>
                <p className="studentName">Muhammad-Khoirul-Anam</p>
                <p className="studentId">FS10883091</p>
            </Box>
        </>
    );
};

export default Footer;
