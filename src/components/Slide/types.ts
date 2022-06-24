export interface ApiResponse extends Omit<SlideProps, "htmlId">{
  id: string
}
export interface SlideProps {
  headline: string,
  htmlId: string,
  displayName: string,
  altText?: string,
  // socialImage?: string,
  // sectionLabel: string,
  topicName: string,
  permaLink: string, 
  publishedDate: string, 
  primaryImage: string
}