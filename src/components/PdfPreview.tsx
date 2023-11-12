import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

import classes from "./PdfPreview.module.css";

import practiceImage from "../assets/pdf-practice-image.png";
import allThePracticeLogo from "../assets/all-the-practice-logo.png";

export default function PdfPreview() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const newWindow = useRef<Window | null>(null);

  useEffect(() => {
    setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open("", "", "width=700, height=1000");
      newWindow.current!.document.body.style.margin = "0";
      newWindow.current!.document.body.style.padding = "0";
      newWindow.current!.document.body.style.overflow = "hidden";
      newWindow.current!.document.body.appendChild(container);

      const curWindow = newWindow.current;

      return () => curWindow!.close();
    }
  }, [container]);

  const pdf = (
    <div className={classes.pdfWrapper}>
      <PDFViewer style={{ width: "100vw", height: "100vh" }}>
        <Document style={styles.document}>
          <Page size="A4" style={styles.page}>
            <Text style={styles.title}>ALL THE PRACTICE INC.</Text>
            <Text style={styles.address}>
              10, Euncheon-ro 35na-gil, Gwanak-gu, Seoul, Republic of Korea
            </Text>
            <Text style={styles.tel}>
              Tel : 010-9963-6348 / Fax : 010-9963-6348
            </Text>
            <View style={styles.contactPoint}>
              <Text>Contact Point: Tynage</Text>
              <Text>Date: 2023.11.11</Text>
            </View>
            <View style={styles.dueDate}>
              <Text>Due Date: 2023.11.14</Text>
            </View>
            <View style={styles.practiceImageWrapper}>
              <View>
                <Image src={practiceImage} style={styles.practiceImage} />
              </View>
              <View style={styles.warningText}>
                <Text>*This invoice will be expired and booking will</Text>
                <Text>be canceled</Text>
                <Text>if you do not pay until the due date.</Text>
              </View>
            </View>
            <View style={styles.billTo}>
              <Text style={styles.billToText}>Bill To.</Text>
              <Text style={styles.buyerName}>Tyange</Text>
              <Text style={styles.oceanOutBound}>&#60;Ocean Outbound&#62;</Text>
            </View>
            <View style={styles.invoiceData}>
              <View style={styles.invoiceNo}>
                <Text style={styles.invoiceNoText}>PRACTICE NO</Text>
                <Text>AI-202311100001</Text>
              </View>
              <View style={styles.invoiceDate}>
                <Text style={styles.invoiceNoText}>PRACTICE DATE</Text>
                <Text>2023.11.12</Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                backgroundColor: "#dbdad7",
                padding: 2,
              }}
            >
              <Text
                style={{
                  ...styles.detailHeading,
                  width: "25%",
                }}
              >
                DESCRIPTION
              </Text>
              <Text
                style={{
                  ...styles.detailHeading,
                  width: "10%",
                }}
              >
                CUR
              </Text>
              <Text
                style={{
                  ...styles.detailHeading,
                  width: "10%",
                }}
              >
                PER
              </Text>
              <Text
                style={{
                  ...styles.detailHeading,
                  width: "10%",
                }}
              >
                RATE
              </Text>
              <Text
                style={{
                  ...styles.detailHeading,
                  width: "15%",
                }}
              >
                AMT(CUR)
              </Text>
              <Text
                style={{
                  ...styles.detailHeading,
                  width: "10%",
                }}
              >
                EX.RATE
              </Text>
              <Text
                style={{
                  ...styles.detailHeading,
                  width: "10%",
                }}
              >
                AMT(KRW)
              </Text>
              <Text
                style={{
                  ...styles.detailHeading,
                  width: "10%",
                }}
              >
                VAT
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 2,
                borderTop: 2,
                borderBottom: 2,
              }}
            >
              <Text
                style={{
                  ...styles.detailText,
                  width: "25%",
                }}
              >
                PRACTICE COST (ALL-IN)
              </Text>
              <Text
                style={{
                  ...styles.detailText,
                  width: "10%",
                }}
              >
                CUR
              </Text>
              <Text
                style={{
                  ...styles.detailText,
                  width: "10%",
                }}
              >
                PER
              </Text>
              <Text
                style={{
                  ...styles.detailText,
                  width: "10%",
                }}
              >
                RATE
              </Text>
              <Text
                style={{
                  ...styles.detailText,
                  width: "15%",
                }}
              >
                AMT(CUR)
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 2,
                borderBottom: 2,
              }}
            >
              <Text
                style={{
                  width: "25%",
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                TOTAL:
              </Text>
              <Text
                style={{
                  width: "10%",
                }}
              ></Text>
              <Text
                style={{
                  width: "10%",
                }}
              ></Text>
              <Text
                style={{
                  width: "10%",
                  fontSize: 12,
                  paddingLeft: 20,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                (USD)
              </Text>
              <Text
                style={{
                  width: "15%",
                  fontSize: 12,
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                }}
              >
                $ 1,004
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                padding: 3,
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontSize: 12,
                }}
              >
                [ REMARK ]
              </Text>
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontSize: 12,
                  marginTop: 2,
                }}
              >
                Free Text
              </Text>
            </View>
            <View
              style={{
                fontFamily: "Helvetica-Bold",
                fontSize: 11,
                width: "100%",
              }}
            >
              <Text
                style={{
                  width: "100%",
                  textAlign: "right",
                  paddingRight: 30,
                  color: "#5a80cc",
                }}
              >
                AI-202311100001
              </Text>
            </View>
            <View
              style={{
                fontSize: 10,
              }}
            >
              <View
                style={{
                  ...styles.etcInfoLine,
                }}
              >
                <Text
                  style={{
                    width: "35%",
                  }}
                >
                  PROD OF LOADING
                </Text>
                <Text>Keoran</Text>
              </View>
              <View
                style={{
                  ...styles.etcInfoLine,
                }}
              >
                <Text
                  style={{
                    width: "35%",
                  }}
                >
                  PROD OF FINAL DESTINATION
                </Text>
                <Text>Koryo</Text>
              </View>
              <View
                style={{
                  ...styles.etcInfoLine,
                }}
              >
                <Text
                  style={{
                    width: "35%",
                  }}
                >
                  INSURANCE
                </Text>
                <Text>NONE</Text>
              </View>
              <View
                style={{
                  ...styles.etcInfoLine,
                }}
              >
                <Text
                  style={{
                    width: "35%",
                  }}
                >
                  SPECIAL TERMS & CONDITIONS
                </Text>
                <Text>NONE</Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <View
                style={{
                  borderTop: 1,
                }}
              ></View>
              <View style={{ paddingTop: 1 }}></View>
              <View style={{ borderTop: 1, borderTopStyle: "dashed" }}></View>
              <View style={{ paddingTop: 1 }}></View>
              <View
                style={{
                  borderTop: 1,
                }}
              ></View>
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontSize: 11,
                  padding: 3,
                }}
              >
                *BANK ACCOUNT FOR T/T*
              </Text>
            </View>
            <View
              style={{
                padding: 3,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "65%",
                }}
              >
                <View style={{ width: "100%" }}>
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: "right",
                    }}
                  >
                    Signed by
                  </Text>
                </View>
                <View style={{ ...styles.companyInfoLine }}>
                  <Text
                    style={{
                      fontFamily: "Helvetica-Bold",
                      fontSize: 9,
                      width: "35%",
                    }}
                  >
                    BENEFICIARY'S NAME
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    ALL THE PRACTICE INC.
                  </Text>
                </View>
                <View style={{ ...styles.companyInfoLine }}>
                  <Text
                    style={{
                      fontFamily: "Helvetica-Bold",
                      fontSize: 9,
                      width: "35%",
                    }}
                  >
                    BENEFICIARY'S ADDRESS
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    XX, XXXXXX XXX, XXXX, XXXXXXXXX-XX,
                  </Text>
                </View>
                <View style={{ ...styles.companyInfoLine }}>
                  <Text
                    style={{
                      fontFamily: "Helvetica-Bold",
                      fontSize: 9,
                      width: "35%",
                    }}
                  >
                    BANK ACCOUNT NO.
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    XXX-XXXXXX-XXXXX
                  </Text>
                </View>
                <View style={{ ...styles.companyInfoLine }}>
                  <Text
                    style={{
                      fontFamily: "Helvetica-Bold",
                      fontSize: 9,
                      width: "35%",
                    }}
                  >
                    BANK NAME
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    XXX XXX XXXX
                  </Text>
                </View>
                <View style={{ ...styles.companyInfoLine }}>
                  <Text
                    style={{
                      fontFamily: "Helvetica-Bold",
                      fontSize: 9,
                      width: "35%",
                    }}
                  >
                    SWIFT
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    XXXXXXXXXX
                  </Text>
                </View>
                <View style={{ ...styles.companyInfoLine }}>
                  <Text
                    style={{
                      fontFamily: "Helvetica-Bold",
                      fontSize: 9,
                      width: "35%",
                    }}
                  >
                    BANK ADDRESS
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    XX, XXXXXX, XXXXXXX, XXXXX, XXXXX
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "35%",
                }}
              >
                <Image
                  src={allThePracticeLogo}
                  style={{ width: 100, marginLeft: 20 }}
                />
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );

  return container && createPortal(pdf, container);
}

const styles = StyleSheet.create({
  document: {
    width: "100%",
  },
  page: {
    width: "100%",
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    fontFamily: "Helvetica-Bold",
  },
  address: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 8,
  },
  tel: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 3,
  },
  contactPoint: {
    width: "100%",
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 3,
  },
  dueDate: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    fontSize: 11,
    padding: 3,
  },
  practiceImageWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3,
  },
  practiceImage: {
    width: 100,
    marginLeft: 50,
  },
  warningText: {
    color: "red",
    flexDirection: "column",
    alignItems: "flex-end",
    fontSize: 10,
  },
  billTo: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    fontSize: 11,
    padding: 3,
  },
  billToText: {
    width: "20%",
    fontFamily: "Helvetica-Bold",
  },
  buyerName: {
    width: "20%",
    fontFamily: "Helvetica-Bold",
  },
  oceanOutBound: {
    width: "60%",
    textAlign: "right",
  },
  invoiceData: {
    fontSize: 10,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTop: 3,
    borderBottom: 3,
    borderColor: "#2b8886",
  },
  invoiceNo: {
    width: "60%",
    flexDirection: "row",
  },
  invoiceNoText: {
    marginRight: 20,
    fontFamily: "Helvetica-Bold",
  },
  invoiceDate: {
    width: "40%",
    flexDirection: "row",
  },
  invoiceDateText: {
    marginRight: 20,
    fontFamily: "Helvetica-Bold",
  },
  detailHeading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    textAlign: "center",
  },
  detailText: {
    fontSize: 10,
    textAlign: "center",
  },
  etcInfoLine: {
    flexDirection: "row",
    padding: 3,
  },
  companyInfoLine: { width: "100%", padding: 2, flexDirection: "row" },
});
