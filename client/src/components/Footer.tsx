import { Typography } from "@mui/material";
import { shades } from "../theme";
function Footer() {
  return (
    <footer
      style={{
        padding: "20px 0px",
        backgroundColor: shades.neutral[100],
        marginTop: "auto",
      }}
    >
      <div className="footer__container">
        <div>
          <div>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb="15px"
              color={shades.secondary[500]}
            >
              Swift Cart
            </Typography>
            <div>Redefining the pace of online shopping.</div>
          </div>
          <div>
            <Typography variant="h4" fontWeight="bold" mb="15px">
              About Us
            </Typography>
            <Typography mb="15px" className="footer__link">
              Careers
            </Typography>
            <Typography mb="15px" className="footer__link">
              Terms & Conditions
            </Typography>
            <Typography mb="15px" className="footer__link">
              Privacy Policy
            </Typography>
          </div>
        </div>
        <div>
          <div>
            <Typography variant="h4" fontWeight="bold" mb="15px">
              Customer Care
            </Typography>
            <Typography mb="15px" className="footer__link">
              Track Your Order
            </Typography>
            <Typography mb="15px" className="footer__link">
              Corporate & Bulk Purchasing
            </Typography>
            <Typography mb="15px" className="footer__link">
              Returns & Refunds
            </Typography>
          </div>

          <div>
            <Typography variant="h4" fontWeight="bold" mb="15px">
              Contact Us
            </Typography>
            <Typography mb="15px">50 north Cairo, Egypt</Typography>
            <Typography mb="15px" sx={{ wordWrap: "break-word" }}>
              Email: swiftcart@email.com
            </Typography>
            <Typography mb="15px">(222)333-4444</Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
