const fontFamily = "sans-serif";
const padding = "10px 10px";
const none = "none";
const width100 = "100%";
const inlineBlock = "inline-block";
const dark = "#033922";
const middle = "#BCE5D4";
const light = "#E7F3EE";
const grey = "#6E7F78";
const width = "400px";

export const styles = {
	header: 
	{
  	fontFamily: fontFamily,
  	backgroundColor: dark,
  	padding: padding,
  	paddingBottom: 20,
 	 	margin: 0,
 	 	//border: "1px solid #CBE6DA"
  },
  navLink:
  {
  	padding: padding,
  	color: middle,
  },
  section:
  {
  	padding: padding,
  	backgroundColor: grey,
  },
  h1:
  {
  	color: light,
  	margin: 0,
  	padding: padding,
  },
  h2:
  {
  	color: grey,
  	fontSize: ".9em",
  	margin: 0,
  	padding: "0 0 20px 20px",
  },
  h4: 
  {
  	margin: 0,
  	padding: padding,
 	 	color: middle,
  	textTransform: "uppercase"
  },
  sorter:
  {
  	color: dark,
  	paddingLeft: 10,
  	fontSize: ".8em",
  	width: width
  },
  button:
  {
		margin: 0,
  	padding: "5px 0",
  	border: 0,
  	outline: "none",
  	borderBottom: "1px solid " + light,
  	background: grey,
  	fontFamily: "inherit",
  	fontSize: ".9em",
  	color: middle,
  	cursor: "pointer",
  	display: inlineBlock,
  	width: "33%"
  },
  ul:
  {
  	margin:0,
  	padding: padding,
  	width: width,
  	listStyleType: none
  },
  li:
  {
  	listStylePosition: "inside",
  	borderBottom: "1px solid " + light,
  	marginBottom: 10
  },
  liLink:
  {
  	display: inlineBlock,
  	padding: "0 0 10px 10px",
  	color: light,
  	textDecoration: none,
  	width: width100
  },
  titleSpan:
  {
  	display: inlineBlock,
  	width: "75%",
  },
  rtSpan:
  {
  	fontSize: ".6em",
  	display: inlineBlock,
  	color: middle,
  	width: "5%",
  	textAlign: "center",
  },
  dateSpan:
  {
  	fontSize: ".8em",
  	display: inlineBlock,
  	color: dark,
  	width: "15%",
  	textAlign: "right",
  },
  detailLi:
  {
   	listStylePosition: "inside",
   	borderBottom: "1px solid " + light,
   	marginBottom: 10
 },
  keySpan:
  {
  	fontSize: ".8em",
  	display: inlineBlock,
  	width: 100,
  	marginBottom: 10,
  	verticalAlign: "top",
  	color: middle
  },
  valueSpan:
  {
  	fontSize: "1em",
  	display: inlineBlock,
  	color: dark,
  	width: 300,
  	textAlign: "left",
  	marginBottom: 10,
  	verticalAlign: "middle"

  },
  spanUl:
  {
  	margin:0,
  	padding: 0,
  	width: width100,
  	listStyleType: none
  },
  spanLi:
  {
  },
  spanLiLink:
  {
  	display: inlineBlock,
  	textDecoration: none,
  	color: light,
  	fontSize: ".9em",
  	width: width100
  },
  light: 
  {
  	color: light
  },
  middle: 
  {
  	color: middle
  },
  dark: 
  {
  	color: dark
  }
 };