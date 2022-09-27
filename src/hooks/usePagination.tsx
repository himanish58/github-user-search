import React, { useRef, useEffect, useCallback } from 'react';

const defaultOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0.1,
};

const usePagination = (
	paginationCallBack: Function,
	options = defaultOptions
) => {
	const observerRef = useRef<any>(null);
	const observerCallback = useCallback(
		(entries: any) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				paginationCallBack(true);
			}
		},
		[paginationCallBack]
	);

	useEffect((): (() => void) => {
		const observer = new IntersectionObserver(observerCallback, options);
		observerRef.current && observer.observe(observerRef.current);
		return () => observerRef.current && observer.unobserve(observerRef.current);
	}, [observerCallback, options]);

	return observerRef;
};

export default usePagination;
