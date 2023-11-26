import { Typography } from "@mui/material";
import { shades } from "../theme";
function Footer() {
  return (
    <footer
      style={{
        marginTop: "70px",
        padding: "40px 0px",
        backgroundColor: shades.neutral[100],
      }}
    >
      <div className="footer__container">
        <div style={{ width: "clamp(20%, 25%, 30%)" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Swift Cart
          </Typography>
          <div>
            Redefining the pace of online shopping. Your destination for curated
            products delivered with speed and efficiency. Join us on the fast
            lane of digital retail therapy.
          </div>
        </div>

        <div>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </div>

        <div>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </div>

        <div style={{ width: "clamp(20%, 25%, 30%)" }}>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">50 north Cairo, Egypt</Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: mredwardroh@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
