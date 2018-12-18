package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/aaa")
public class TextController {
	@RequestMapping("/bbb.do")
	public String showSome(){
		
		return "index";
		
	}
}
