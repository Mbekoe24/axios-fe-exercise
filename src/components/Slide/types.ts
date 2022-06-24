export interface ApiResponse extends Omit<SlideProps, "htmlId">{
  id: string
}
export interface SlideProps {
  headline: string,
  htmlId: string,
  displayName: string,
  // sectionLabel: string,
  topicName: string,
  permaLink: string, 
  publishedDate: string, 
  primaryImage: string
}