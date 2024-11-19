import BeforeComponent1 from "./Example1/BeforeComponent";
import RefactoredComponent1 from "./Example1/RefactoredComponent";
import {
	beforeCode as beforeCode1,
	refactoredCode as refactoredCode1,
} from "./Example1/code";

import BeforeComponent2 from "./Example2/BeforeComponent";
import RefactoredComponent2 from "./Example2/RefactoredComponent";
import {
	beforeCode as beforeCode2,
	refactoredCode as refactoredCode2,
} from "./Example2/code";

export const examples = [
	{
		title: "Example 1",
		before: {
			component: BeforeComponent1,
			code: beforeCode1,
		},
		refactored: {
			component: RefactoredComponent1,
			code: refactoredCode1,
		},
	},
	{
		title: "Example 2",
		before: {
			component: BeforeComponent2,
			code: beforeCode2,
		},
		refactored: {
			component: RefactoredComponent2,
			code: refactoredCode2,
		},
	},
];
