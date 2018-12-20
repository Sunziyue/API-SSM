package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class TextController {
	@RequestMapping("/showIndex.do")
	public String showSome(){
		return "index";
	}
}
