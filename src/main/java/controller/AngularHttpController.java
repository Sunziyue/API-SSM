package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import bean.ResponseResult;
import bean.UserBeen;

@Controller
@RequestMapping("/login")
public class AngularHttpController {
	
	@RequestMapping("showLoginInfo")
	@ResponseBody
	public ResponseResult<UserBeen> showLoginInfo() {
		ResponseResult<UserBeen> rr = new ResponseResult<UserBeen>();
		rr.setState(1);
		rr.setMessage("succeff");
		rr.setData(new UserBeen("1","豆浆辣条","猫头鹰"));
		System.out.println(rr);
		return rr;
	}
}
