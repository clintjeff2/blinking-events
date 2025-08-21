"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, Heart } from "lucide-react"
import { motion, AnimatePresence, useInView } from "@/lib/motion"

const testimonials = [
	{
		id: 1,
		name: "Dr. Amina Mbeki",
		role: "CEO, Douala Tech Solutions",
		company: "Corporate Event",
		rating: 5,
		quote:
			"Blinking Events transformed our annual gala into an unforgettable experience. Their attention to detail and professional staff exceeded all expectations. The team's ability to handle last-minute changes was impressive.",
		image: "/smiling-african-businesswoman.png",
	},
	{
		id: 2,
		name: "Jean-Paul & Marie Nguema",
		role: "Newlyweds",
		company: "Wedding Celebration",
		rating: 5,
		quote:
			"Our wedding was absolutely perfect! From the elegant hostesses to the exquisite catering, every moment was magical. Thank you for making our dreams come true and creating memories that will last a lifetime.",
		image: "/happy-african-couple-wedding.png",
	},
	{
		id: 3,
		name: "Minister Joseph Etame",
		role: "Government Official",
		company: "State Function",
		rating: 5,
		quote:
			"The professionalism and security protocols were impeccable. Blinking Events handled our high-profile event with discretion and excellence. Their team understood the protocol requirements perfectly.",
		image: "/placeholder-6nl0q.png",
	},
	{
		id: 4,
		name: "Sarah Biya",
		role: "Marketing Director",
		company: "Product Launch",
		rating: 5,
		quote:
			"The team's creativity and execution were outstanding. Our product launch was a huge success thanks to their innovative approach and flawless coordination. The media coverage exceeded our expectations.",
		image: "/confident-african-businesswoman.png",
	},
	{
		id: 5,
		name: "Dr. Emmanuel Fon",
		role: "University Vice-Chancellor",
		company: "Graduation Ceremony",
		rating: 5,
		quote:
			"Managing a graduation ceremony for 2,000+ graduates and their families is no small feat. Blinking Events coordinated everything perfectly - from guest seating to VIP protocol.",
		image: "/placeholder-user.jpg",
	},
	{
		id: 6,
		name: "Grace Mbah",
		role: "Event Organizer",
		company: "Limbe Cultural Festival",
		rating: 5,
		quote:
			"Working with Blinking Events for our annual cultural festival was a game-changer. They brought professionalism and creativity that elevated our event to international standards.",
		image: "/placeholder-user.jpg",
	},
]

// Animation variants for testimonial slides
const slideVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 500 : -500,
		opacity: 0,
		scale: 0.95,
	}),
	center: {
		x: 0,
		opacity: 1,
		scale: 1,
	},
	exit: (direction: number) => ({
		x: direction < 0 ? 500 : -500,
		opacity: 0,
		scale: 0.95,
	}),
}

const StarRating = ({ rating }: { rating: number }) => (
	<motion.div
		className="flex justify-center mb-5"
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
	>
		{[...Array(rating)].map((_, i) => (
			<motion.div
				key={i}
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3, delay: i * 0.1 }}
			>
				<Star
					key={i}
					className="h-6 w-6 text-[#C8A64B] fill-current drop-shadow-md"
				/>
			</motion.div>
		))}
	</motion.div>
)

export function TestimonialsCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [direction, setDirection] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const sectionRef = useRef(null)
	const isInView = useInView(sectionRef, { once: false, margin: "-100px" })
	const rowOneRef = useRef(null)
	const rowTwoRef = useRef(null)
	const mobileCarouselRef = useRef(null)
	const isMobileCarouselInView = useInView(mobileCarouselRef, {
		once: false,
		margin: "-50px",
	})

	useEffect(() => {
		if (isInView && !isPaused) {
			const timer = setInterval(() => {
				setDirection(1)
				setCurrentIndex((prev) => (prev + 1) % testimonials.length)
			}, 8000)
			return () => clearInterval(timer)
		}
	}, [isInView, isPaused])

	const nextTestimonial = () => {
		setDirection(1)
		setCurrentIndex((prev) => (prev + 1) % testimonials.length)
	}

	const prevTestimonial = () => {
		setDirection(-1)
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
	}

	// Split testimonials into two rows
	const rowOneTestimonials = testimonials.slice(
		0,
		Math.ceil(testimonials.length / 2)
	)
	const rowTwoTestimonials = testimonials.slice(
		Math.ceil(testimonials.length / 2)
	)

	return (
		<section
			className="py-28 bg-gradient-to-b from-[#F8F9FA] to-white relative overflow-hidden"
			ref={sectionRef}
		>
			{/* Decorative elements */}
			<motion.div
				className="absolute top-24 right-[5%] w-64 h-64 bg-[#C8A64B]/5 rounded-full blur-3xl"
				animate={
					isInView
						? {
								opacity: [0, 0.7, 0.5],
								x: [50, 0, 30],
								y: [0, 30, 0],
						  }
						: { opacity: 0 }
				}
				transition={{
					duration: 8,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "reverse",
				}}
			/>

			<motion.div
				className="absolute bottom-24 left-[5%] w-80 h-80 bg-[#E1262C]/5 rounded-full blur-3xl"
				animate={
					isInView
						? {
								opacity: [0, 0.6, 0.4],
								x: [0, 30, 0],
								y: [30, 0, 30],
						  }
						: { opacity: 0 }
				}
				transition={{
					duration: 10,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "reverse",
					delay: 1,
				}}
			/>

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
					}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				>
					<motion.span
						className="text-primary font-medium text-sm uppercase tracking-wider mb-2 inline-block"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						Client Testimonials
					</motion.span>

					<motion.h2
						className="font-serif text-3xl md:text-5xl font-bold mb-4"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						What Our <span className="text-primary">Clients</span> Say
					</motion.h2>

					<motion.p
						className="text-lg text-muted-foreground max-w-2xl mx-auto"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						Trusted by leading organizations and couples across Cameroon's
						Littoral & Southwest regions
					</motion.p>
				</motion.div>

				{/* Desktop View - Continuous Rows */}
				<div className="hidden lg:block">
					{/* First Row - Left to Right */}
					<div className="relative overflow-hidden mb-8" ref={rowOneRef}>
						<motion.div
							className="flex gap-8 flex-nowrap"
							animate={{
								x: [0, -2000],
							}}
							transition={{
								x: {
									repeat: Infinity,
									repeatType: "loop",
									duration: 40,
									ease: "linear",
								},
							}}
						>
							{/* Double the items for continuous flow */}
							{[...rowOneTestimonials, ...rowOneTestimonials].map(
								(item, index) => (
									<motion.div
										key={`row1-${index}`}
										className="flex-shrink-0 w-[400px]"
										whileHover={{ y: -10, scale: 1.02 }}
										transition={{ duration: 0.3 }}
									>
										<Card className="bg-white border shadow-md hover:shadow-lg h-full">
											<CardContent className="p-6">
												<div className="flex items-start mb-4">
													<div className="h-12 w-12 rounded-full overflow-hidden mr-4">
														<img
															src={item.image}
															alt={item.name}
															className="h-full w-full object-cover"
														/>
													</div>
													<div>
														<h3 className="font-medium text-foreground">
															{item.name}
														</h3>
														<p className="text-muted-foreground text-sm">
															{item.role}
														</p>
														<p className="text-primary text-xs">
															{item.company}
														</p>
													</div>
												</div>

												<div className="relative">
													<Quote className="h-8 w-8 text-[#E1262C]/10 absolute -top-2 -left-2" />
													<p className="text-foreground/80 text-sm pl-6">
														"{item.quote.length > 150
															? `${item.quote.substring(
																	0,
																	150
															  )}...`
															: item.quote}"
													</p>
												</div>

												<div className="flex mt-4">
													{[...Array(item.rating)].map((_, i) => (
														<Star
															key={i}
															className="h-4 w-4 text-[#C8A64B] fill-current"
														/>
													))}
												</div>
											</CardContent>
										</Card>
									</motion.div>
								)
							)}
						</motion.div>
					</div>

					{/* Second Row - Right to Left */}
					<div className="relative overflow-hidden" ref={rowTwoRef}>
						<motion.div
							className="flex gap-8 flex-nowrap"
							animate={{
								x: [-2000, 0],
							}}
							transition={{
								x: {
									repeat: Infinity,
									repeatType: "loop",
									duration: 50,
									ease: "linear",
								},
							}}
						>
							{/* Double the items for continuous flow */}
							{[...rowTwoTestimonials, ...rowTwoTestimonials].map(
								(item, index) => (
									<motion.div
										key={`row2-${index}`}
										className="flex-shrink-0 w-[400px]"
										whileHover={{ y: -10, scale: 1.02 }}
										transition={{ duration: 0.3 }}
									>
										<Card className="bg-white border shadow-md hover:shadow-lg h-full">
											<CardContent className="p-6">
												<div className="flex items-start mb-4">
													<div className="h-12 w-12 rounded-full overflow-hidden mr-4">
														<img
															src={item.image}
															alt={item.name}
															className="h-full w-full object-cover"
														/>
													</div>
													<div>
														<h3 className="font-medium text-foreground">
															{item.name}
														</h3>
														<p className="text-muted-foreground text-sm">
															{item.role}
														</p>
														<p className="text-primary text-xs">
															{item.company}
														</p>
													</div>
												</div>

												<div className="relative">
													<Quote className="h-8 w-8 text-[#E1262C]/10 absolute -top-2 -left-2" />
													<p className="text-foreground/80 text-sm pl-6">
														"{item.quote.length > 150
															? `${item.quote.substring(
																	0,
																	150
															  )}...`
															: item.quote}"
													</p>
												</div>

												<div className="flex mt-4">
													{[...Array(item.rating)].map((_, i) => (
														<Star
															key={i}
															className="h-4 w-4 text-[#C8A64B] fill-current"
														/>
													))}
												</div>
											</CardContent>
										</Card>
									</motion.div>
								)
							)}
						</motion.div>
					</div>
				</div>

				{/* Mobile View - Carousel */}
				<div
					className="lg:hidden relative"
					ref={mobileCarouselRef}
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					<AnimatePresence initial={false} custom={direction}>
						<motion.div
							key={currentIndex}
							custom={direction}
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30,
							}}
							className="w-full"
						>
							<Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
								<CardContent className="p-6">
									<div className="flex flex-col items-center">
										<div className="mb-4 flex flex-col items-center">
											<div className="h-20 w-20 rounded-full overflow-hidden mb-3 ring-4 ring-[#E1262C]/10">
												<img
													src={testimonials[currentIndex].image}
													alt={testimonials[currentIndex].name}
													className="h-full w-full object-cover"
												/>
											</div>

											<h3 className="font-medium text-center">
												{testimonials[currentIndex].name}
											</h3>
											<p className="text-muted-foreground text-sm text-center">
												{testimonials[currentIndex].role}
											</p>
											<p className="text-primary text-xs font-medium mt-1 text-center">
												{testimonials[currentIndex].company}
											</p>
										</div>

										<StarRating rating={testimonials[currentIndex].rating} />

										<div className="relative mt-4">
											<Quote className="h-8 w-8 text-[#E1262C]/10 absolute -top-4 -left-2" />
											<motion.blockquote
												className="text-sm text-foreground/90 leading-relaxed italic px-6"
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.5 }}
											>
												"{testimonials[currentIndex].quote}"
											</motion.blockquote>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</AnimatePresence>

					<div className="absolute top-1/2 transform -translate-y-1/2 -left-4">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full h-10 w-10 bg-white/80 hover:bg-white shadow-lg"
							onClick={prevTestimonial}
						>
							<ChevronLeft className="h-4 w-4" />
							<span className="sr-only">Previous</span>
						</Button>
					</div>

					<div className="absolute top-1/2 transform -translate-y-1/2 -right-4">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full h-10 w-10 bg-white/80 hover:bg-white shadow-lg"
							onClick={nextTestimonial}
						>
							<ChevronRight className="h-4 w-4" />
							<span className="sr-only">Next</span>
						</Button>
					</div>

					<div className="flex justify-center mt-6">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => {
									setDirection(index > currentIndex ? 1 : -1)
									setCurrentIndex(index)
								}}
								className={`mx-1 h-2 w-2 rounded-full ${
									currentIndex === index
										? "bg-primary"
										: "bg-primary/20"
								} transition-all duration-300`}
								aria-label={`Go to testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
