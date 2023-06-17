package com.nevil.Nevil.accessories;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/accessories")
public class AccessoriesController {
    @Autowired
    private AccessoriesService accessoriesService;

    @GetMapping
    public ResponseEntity<List<Accessories>> getAllAccessories(){
        return ResponseEntity.ok(accessoriesService.allAccessories());
    }
    @GetMapping("/colors/{type}")
    public ResponseEntity<List<Accessories>> getByTypeAndColor(@PathVariable String type,ArrayList<String> colors){
        return new ResponseEntity<>(accessoriesService.allByTypeAndColors(type, colors), HttpStatus.OK);
    }
    @GetMapping("/{type}")
    public ResponseEntity<List<Accessories>> getByType(@PathVariable String type){
        return new ResponseEntity<>(accessoriesService.allByType(type), HttpStatus.OK);
    }
}
