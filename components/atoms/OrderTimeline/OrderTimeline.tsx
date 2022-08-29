import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { FaRegNewspaper } from "@react-icons/all-files/fa/FaRegNewspaper";
import { FaInfo } from "@react-icons/all-files/fa/FaInfo";
import { FaBox } from "@react-icons/all-files/fa/FaBox";
import { FaPlane } from "@react-icons/all-files/fa/FaPlane";
import styles from "./ordertimeline.module.scss";
import Typography from "@mui/material/Typography";

export default function OrderTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <FaRegNewspaper className={styles.white} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Choose plants
          </Typography>
          <Typography>
            Firstly, you need to choose plants what you want to order.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          ~ 24h
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <FaInfo className={styles.white} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Confirmation
          </Typography>
          <Typography>Next, we must confirm your order!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          48h ~
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <FaBox className={styles.white} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Packing
          </Typography>
          <Typography>
            After confirmation, your plants will be completed and packed
            carefully.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <FaPlane className={styles.white} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Sent
          </Typography>
          <Typography>
            After this fast process, your order will be sent!
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
