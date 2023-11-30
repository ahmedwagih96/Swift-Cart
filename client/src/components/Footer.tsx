import { Typography } from "@mui/material";
import { shades } from "../theme";
function Footer() {
  return (
    <footer
      style={{
        padding: "40px 0px",
        backgroundColor: shades.neutral[100],
      }}
    >
      <div className="footer__container">
        <div>
          <div>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb="30px"
              color={shades.secondary[500]}
            >
              Swift Cart
            </Typography>
            <div>Redefining the pace of online shopping.</div>
          </div>
          <div>
            <Typography variant="h4" fontWeight="bold" mb="30px">
              About Us
            </Typography>
            <Typography mb="30px" className="footer__link">
              Careers
            </Typography>
            <Typography mb="30px" className="footer__link">
              Our Stores
            </Typography>
            <Typography mb="30px" className="footer__link">
              Terms & Conditions
            </Typography>
            <Typography mb="30px" className="footer__link">
              Privacy Policy
            </Typography>
          </div>
        </div>
        <div>
          <div>
            <Typography variant="h4" fontWeight="bold" mb="30px">
              Customer Care
            </Typography>
            <Typography mb="30px" className="footer__link">
              Help Center
            </Typography>
            <Typography mb="30px" className="footer__link">
              Track Your Order
            </Typography>
            <Typography mb="30px" className="footer__link">
              Corporate & Bulk Purchasing
            </Typography>
            <Typography mb="30px" className="footer__link">
              Returns & Refunds
            </Typography>
          </div>

          <div>
            <Typography variant="h4" fontWeight="bold" mb="30px">
              Contact Us
            </Typography>
            <Typography mb="30px">50 north Cairo, Egypt</Typography>
            <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
              Email: swiftcart@email.com
            </Typography>
            <Typography mb="30px">(222)333-4444</Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
