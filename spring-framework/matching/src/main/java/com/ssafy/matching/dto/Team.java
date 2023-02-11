package com.ssafy.matching.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString

@SuppressWarnings("serial")
@Entity
@ApiModel(value = "Team : 팀 정보", description = "팀의 정보를 나타낸다.")
public class Team implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "팀 번호")
    private int teamId;
    @ApiModelProperty(value = "팀장의 아이디", required = true)
    private int hostId;
    @ApiModelProperty(value = "팀 이름", required = true)
    private String name;
    @ApiModelProperty(value = "운동 종류", required = true)
    private String sports;
    @ApiModelProperty(value = "팀의 게임 종류", required = true)
    private String gameType;
    @ApiModelProperty(value = "운동 레벨", required = true)
    private String level;
    @ApiModelProperty(value = "팀의 랭킹 포인트")
    private int point;

    @OneToOne
    @JoinColumn(name = "hostId", insertable=false, updatable=false)
    @ApiModelProperty(value = "팀장 정보")
    private Member host;
    
    @ApiModelProperty(value = "팀의 멤버 리스트", required = true)
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "teamId")
    private List<TeamMember> teamMemberList = new ArrayList<>();

    @ApiModelProperty(value = "팀의 경기 리스트")
    @OneToMany
    @JoinColumn(name = "teamId", insertable=false, updatable=false)
    private List<TeamMatchResult> teamMatchResultList;
}
