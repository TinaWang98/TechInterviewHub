import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Udemy</Typography>
        <Typography color={medium}>udemy.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Udemy, Inc. is an education technology company that provides an online learning and teaching platform.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
